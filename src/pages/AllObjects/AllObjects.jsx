import React from "react";
import "./objects.scss";
import { useGetObjectsListQuery } from "../../api/objects/objects.api";

function AllObjects() {
  const { data, isLoading, error } = useGetObjectsListQuery();
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < data.length; i++) {
    if (i % 2 === 0) {
      arr1.push(data[i]);
    } else {
      arr2.push(data[i]);
    }
  }
  console.log(arr1);
  console.log(arr2);



  return (
    <section className="AllObjects">
      {data.map((item,index) => (
        <div className="AllObjects__bg" style={{ backgroundImage: `url(${item.imagebg})` }}>
          <div className="container">
            {index%2==0? <div className="AllObjects__content-right">
              <h2 className="AllObjects__title">{item.title}</h2>
              <p className="AllObjects__text">{item.mini_title}</p>
              <p className="AllObjects__text text-right">{item.info.description}</p>
              <button className="AllObjects__btn">Посмотреть подробнее</button>           </div>:   <div className="AllObjects__content-left">
              <h2 className="AllObjects__title">{item.title}</h2>
              <p className="AllObjects__text">{item.mini_title}</p>
              <p className="AllObjects__text text-left">{item.info.description}</p>
              <button className="AllObjects__btn">Посмотреть подробнее</button>
            </div>}
         
          </div>
        </div>
      ))}
    </section>
  );
}

export default AllObjects;
