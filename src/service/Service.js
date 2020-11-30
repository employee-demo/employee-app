import axios from 'axios';
import apiurl from '../constants/Urls';


const baseURL=apiurl.HOST;
let instance=null
let instanceWithToken=null

   axios.defaults.crossDomain = true;

export default class Service {
  static get(url, params={}) {
    return new Promise((resolve, reject) => {
      this.getInstance().get(url, {params})
        .then(({data}) => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }


  static handleResponse = response => {
    response.blob().then(blob => {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        console.log(url);
        link.href = url;
        link.download = '111.txt';
        link.click();
    })
}

static getFilesWithToken(url, params={}) {
  return new Promise((resolve, reject) => {
    this.getFileContentInstanceWithtoken().get(url, {params,responseType: 'blob'})
      .then(({data}) => {
        resolve(data);
        const fileName =params;
        const alink = document.createElement('a')
        alink.download = fileName
        alink.style.display = 'none'
        alink.href = URL.createObjectURL(data)  
        document.body.appendChild(alink)
        alink.click()
        URL.revokeObjectURL(alink.href) 
        document.body.removeChild(alink)
    })
      .catch(err => {
        reject({err: JSON.stringify(err)});
      });
  });
}


  static getWithToken(url, params={}) {
    return new Promise((resolve, reject) => {
      this.getInstanceWithtoken().get(url, {params})
        .then(({data}) => {
          resolve(data);
        })
        .catch(err => {
          reject({err: JSON.stringify(err)});
        });
    });
  }

  static post(url, params={}) {
    return new Promise((resolve, reject) => {
      this.getInstance().post(url, {...params})
        .then(({data}) => {
          resolve(data);
        })
        .catch(err => {
          reject({err: JSON.stringify(err)});
        });
    });
  }

  static postWithToken(url, params={}) {
    return new Promise((resolve, reject) => {
      this.getInstanceWithtoken().post(url, {...params})
        .then(({data}) => {
          resolve(data);
        })
        .catch(err => {
          console.log(err)
          reject({err: JSON.stringify(err)});
        });
    });
  }
  static put(url, params={}) {
    return new Promise((resolve, reject) => {
      this.getInstance().put(url, {...params})
        .then(({data}) => {
          resolve(data);
        })
        .catch(err => {
          reject({err: JSON.stringify(err)});
        });
    });
  }
  static putWithToken(url, params = {}) {
    return new Promise((resolve, reject) => {
      this.getInstanceWithtoken().put(url, { ...params })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          reject(err.response.data);
        });
    });
  }


  static delete(url) {
    return new Promise((resolve, reject) => {
      this.getInstance().delete(url)
        .then(({data}) => {
          resolve(data);
        })
        .catch(err => {
          reject({err: JSON.stringify(err)});
        });
    });
  }

  static deleteWithToken(url, params={}) {
    return new Promise((resolve, reject) => {
      this.getInstanceWithtoken().delete(url, params)
        .then(({data}) => {
          resolve(data);
        })
        .catch(err => {
          reject({err: JSON.stringify(err)});
        });
    });
  }

  static postFileWithToken(url, file) {
    let formData = new FormData();
    formData.append('file', file);
    return new Promise((resolve, reject) => {
      this.getFileInstanceWithtoken().post(url, formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          err.response && reject(err.response.data);
        });
    });
  }
  static postFilesWithToken(url, files) {
    let formData = new FormData();
    files.map(item => {
      formData.append("files", item);
      return item.id;
    });
    return new Promise((resolve, reject) => {
      this.getFileInstanceWithtoken().post(url, formData)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(err => {
          err.response && reject(err.response.data);
        });
    });
  }

  static getInstance=() => {
    instance=instance? instance:axios.create({
      baseURL,
      timeout: 10000,
    });
    return instance;
  }


  static getInstanceWithtoken=() => {
    instanceWithToken=instanceWithToken? instanceWithToken:axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem('access_token')
      },
    });
    return instanceWithToken;
  }


  static getFileContentInstanceWithtoken=() => {
    instanceWithToken=instanceWithToken? instanceWithToken:axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Authorization': 'Bearer '+localStorage.getItem('access_token')
      },

    });
    return instanceWithToken;
  }


  static getFileInstanceWithtoken = () => {

    instanceWithToken = instanceWithToken ? instanceWithToken : axios.create({
      baseURL,
      timeout: 100000,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
        'Content-Type':'multipart/form-data',
        
      },
    });
    return instanceWithToken;
  }
}