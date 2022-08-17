import { useState, useCallback, useRef } from 'react'
// import cx from 'classnames';
// import { useIntl } from 'umi';
import styles from './index.less';

const FaceDetector: React.FC = (

) => {
  const [faceBase64, setFaceBase64] = useState("");
  const inputFile = useRef<HTMLInputElement>(null);

  const uploadImg = useCallback(
    (file: File) => {
      new Promise(resolve => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        }
        fileReader.onerror = () => {
          console.error("read file failed!");
          resolve("");
        }
      }).then((imgUri: any) => {
        const imgBase64 = imgUri.replace(/^data:image\/\w+;base64,/, "");
        setFaceBase64(imgBase64);
      })
    },
    []
  )

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!inputFile.current) {
        return;
      }
      inputFile.current.click();
    },
    []
  )

  const onInputFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      let files = [...e.target.files]; 
      files = files.slice(0, 1);
      uploadImg(files[0]);
    },
    [uploadImg]
  )


  const onFileDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.type === 'dragover') {
        return;
      }
      // @ts-ignore
      let files = [...e.dataTransfer.files];
      files = files.slice(0, 1);
      uploadImg(files[0]);
    },
    [uploadImg]
  )

  return (
  <div
    className={styles.wrapper}
    role="button"
    onDrop={onFileDrop}
    onDragOver={onFileDrop}
    onClick={onClick}
  >
    <input 
      ref={inputFile} 
      onChange={onInputFileChange} 
      onClick={e => e.stopPropagation()}
      accept="image/jpeg,image/jpg,image/png" 
      style={{ display: 'none' }} 
      multiple={false}
      type="file" 
    />
    <img 
      className={styles.img} src={faceBase64 ? `data:image/png;base64,${faceBase64}` : '/img/default-avator-128x128.png'} 
    />
    
  </div>)
}

export default FaceDetector;