import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Image from '../Image/Image';

export default function Gallary() {
  const [isLoading, setLoading] = useState(true);
  const [imgList, setImgList] = useState([]);

  const imgURL= 'https://api.slingacademy.com/v1/sample-data/photos'

  

  async function dounLoadData() {
    // Fetching API
    const response = await axios.get(imgURL);
    console.log(response);

    // Fetchin data of images
    const imageData = response.data.photos;
    const res = imageData.map((img) => {
      return {
        desc: img.description,
        url: img.url,
        id: img.id,
        user: img.user,
        title: img.title,
      };
    });
    setImgList(res);
    console.log(res);
    setLoading(false);
  }

  useEffect(() => {
    dounLoadData();
  }, [imgURL]);

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {isLoading ? (
          <Loader />
        ) : (
          imgList.map((i) => <Image title={i.title} url={i.url} key={i.id} id={i.id} />)
        )}
      </div>
    </>
  );
}
