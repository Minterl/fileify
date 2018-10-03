let file

  module.exports =  class FileiFyle {

    constructor(_file) {
      file = _file
      if(!file instanceof Blob) {
        console.error('File is not of type Blob.')
      }
    }

    getDomAs(type, cb) {
      let reader = new FileReader()
      let data

      switch(type) {
        //Image
        case 'img':
          reader.onload = ()=> {
            let img = new Image()
            img.src = reader.result
            data = img
            cb(data)
          }
          reader.readAsDataURL(file)
        break
        //TextNode
        case 'textNode':
          reader.onload = ()=> {
            data = document.createTextNode(reader.result)
            cb(data)
          }
          reader.readAsText(file)
        break
        //A tag
        case 'a':
          reader.onload = ()=> {
            let a = document.createElement('a')
            a.innerHTML = reader.result
            data = a
            cb(data)
          }
          reader.readAsText(file)
        break
        //Video tag
        case 'video':
          reader.onload = ()=> {
            let data = reader.result
            let video = document.createElement('video')
            video.setAttribute('src', data)
            cb(video)
          }
          reader.readAsDataURL(file)
        break
        default: console.error('Dom type is not valid.')

        break

      }
    }
    getAsText(cb) {
      const reader = new FileReader()
      let data
      reader.onload = ()=> {
        data = reader.result
        cb(data)
      }
      reader.readAsText(file)
    }
    getAsDataURL(cb) {
      const reader = new FileReader()
      let data
      reader.onload = ()=> {
        data = reader.result
        cb(data)
      }
      reader.readAsDataURL(file)
    }
    getAsBinary(cb) {
      const reader = new FileReader()
      let data
      reader.onload = ()=> {
        data = reader.result
        cb(data)
      }
      reader.readAsBinaryString()
    }
    getAsArrayBuffer(cb) {
      const reader = new FileReader()
      let data
      reader.onload = ()=> {
        data = reader.result
        cb(data)
      }
      reader.readAsArrayBuffer()
    }
  }
