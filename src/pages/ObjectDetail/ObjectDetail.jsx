import React from "react";
import { useParams } from "react-router-dom";
import { useGetObjectQuery } from "../../api/objects/objects.api";
import BeforAfter from "../../componets/BeforeAfter";
import AboutObject from "../../componets/AboutObject";
import Loc from "../../componets/Loc";
import Near from "../../componets/Near";
import Live from "../../componets/Live";
import Numbers from "../../componets/Numbers";
import Panorama from "../../componets/Panorama";
import Numeration from "../../componets/Numeration";
import Collage from "../../componets/Collage";
import Parking from "../../componets/Parking";
import Advantages from "../../componets/Advantages";
import Video from "../../componets/Video";
import Header from "../../componets/Header";
import Footer from "../../componets/Footer";
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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  if (!objectQuery) return <div>Object not found</div>;

  console.log(objectQuery);

  let arr = [];
  if (objectQuery.gallery?.images) {
    for (let i = 0; i < objectQuery.gallery.images.length; i += 5) {
      arr.push(objectQuery.gallery.images.slice(i, i + 5));
    }
  }

  return (
    <div>
      <Header />
      <Panorama info={objectQuery} />
      {objectQuery.about_complex && (
        <AboutObject about={objectQuery.about_complex} />
      )}
      {objectQuery.object_metrics && (
        <Numbers number={objectQuery.object_metrics} />
      )}
      {objectQuery.before_after && (
        <BeforAfter befor={objectQuery.before_after} />
      )}
      {objectQuery.parking_plan && (
        <Parking parking={objectQuery.parking_plan} />
      )}
      <Architecture />
      {arr.map((el, index) => (
        <Collage key={index} item={el} />
      ))}
      {objectQuery.advantages && <Advantages adv={objectQuery.advantages} />}
      {objectQuery.numeration && (
        <Numeration numeration={objectQuery.numeration} />
      )}
      {objectQuery.location && <Loc loc={objectQuery.location} />}
      {objectQuery.interest_nearby && (
        <Near near={objectQuery.interest_nearby} />
      )}
      {objectQuery.footer && <Video video={objectQuery.footer} />}
      <Live />
      <Footer />
    </div>
  );
}

export default ObjectDetail;
