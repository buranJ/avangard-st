import React from "react";
import BeforAfter from "../../componets/BeforeAfter";
import AboutObject from "../../componets/AboutObject";
import Loc from "../../componets/Loc";
import Near from "../../componets/Near";
import Live from "../../componets/Live";
import { useGetObjectQuery } from "../../api/objects/objects.api";
import { useParams } from "react-router-dom";
import Numbers from "../../componets/Numbers";
import Panorama from "../../componets/Panorama";
import Numeration from "../../componets/Numeration";
import Collage from "../../componets/Collage";
import Parking from "../../componets/Parking";
import Advantages from "../../componets/Advantages";
import Video from "../../componets/Video";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
import Progress from "../../componets/Progress";
import Architecture from "../../componets/Architecture";

function ObjectDetail() {
  const { slug } = useParams();
  const {
    data: objectQuery,
    isLoading,
    isError,
  } = useGetObjectQuery({
    slug: slug || "panoramapark",
  });
  // data.respone(objectQuery);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  console.log(objectQuery);

  let arr = [];
  for (let i = 0; i < objectQuery.gallery.images.length; i += 5) {
    arr.push(objectQuery.gallery.images.slice(i, i + 5));
  }
  return (
    <div>
      <Header/>
      <Panorama info={objectQuery} />
      <AboutObject about={objectQuery.about_complex} />
      <Numbers number={objectQuery.object_metrics} />
      <BeforAfter befor={objectQuery.before_after} />
      <Parking parking={objectQuery.parking_plan}/>
        <Architecture/>
      {arr.map((el) => {
        return <Collage item={el} />;
      })}
      <Advantages adv={objectQuery.advantages}/>
      <Numeration numeration={objectQuery.numeration} />
      <Loc loc={objectQuery.location} />
      <Near near={objectQuery.interest_nearby} />
      <Video video={objectQuery.footer}/>
      <Live />
      <Footer/>
    </div>
  );
}

export default ObjectDetail;