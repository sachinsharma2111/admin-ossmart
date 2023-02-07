import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { imagesGet } from "../../redux/features/products/product";
import Gallery from "./Gallery";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondUpload() {
  const [files, setFiles] = useState([]);
  const [allImages, setallImages] = useState([]);
 const disptach = useDispatch()
  useEffect(()=>{
      disptach(imagesGet()).then((response)=>{
        var temp=[]
        response.payload.data.map((element)=>{
          temp.push({"largeURL":"http://31.220.51.140:3000/"+element, "thumbnailURL":"http://31.220.51.140:3000/"+element,  "width":3000,  "height": 2500})
          setallImages(temp)
        })
      })
  },[]);
console.log(allImages)
 

    return (
      <div>
        <div className="content-wrapper">
          <div className="container mt-4">
            <h2 className="mb-3">Upload images</h2>
            <FilePond
              allowMultiple={true}
              files={files}
              maxFiles={10}
              allowReorder={true}
              server="http://31.220.51.140:3000/product/add/single/image" // File upload api goes here
            />
          </div>
          {allImages?
         <Gallery 
         galleryID="my-test-gallery"
         images={allImages}/>
         :null}
        </div>
      </div>
    )
}
export default FilePondUpload