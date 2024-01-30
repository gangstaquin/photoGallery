import { useState } from "react"
import ProgressBar from "./ProgressBar"

export default function UploadForm() {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ["image/jpeg", "image/png"]

  const handleChange = (e) => {
    let selected = e.target.files[0] 

    if(selected && types.includes(selected.type)){
      setFile(selected)
      setError('')
    }else {
      setFile(null)
      setError("Please select an image file with the format JPEG or PNG.")
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange}></input>
        <span>+</span>
      </label>
        <div className="output">
          { error && <div className="error"> { error }</div>}
          { file && <div> { file.name } </div>}
          { file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
    </form>
  )
}
