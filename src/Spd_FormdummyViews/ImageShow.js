import React,{useState, useRef} from 'react'

const ImageShow = () => {
    const[image , setImage]= useState("");
    const imageRef =useRef(null);

    const useDisplayImage=()=> {
        const [result, setResult] = React.useState("");

        const uploader=(e)=> {
          const imageFile = e.target.files[0];
    
          const reader = new FileReader();
          reader.addEventListener("load", (e) => {
            setResult(e.target.result);
          });
    
          reader.readAsDataURL(imageFile);
        }
    
        return { result, uploader };
      }
    
      const { result, uploader } = useDisplayImage();
    
      return (
        <div className="App">
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              uploader(e);
            }}
          />
          {result && <img ref={imageRef} src={result} alt="" />}
        </div>
      );
    }

export default ImageShow;