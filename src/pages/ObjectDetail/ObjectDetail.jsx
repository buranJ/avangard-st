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
  return (
    <div>
      <Panorama info={objectQuery}/>
            <AboutObject about={objectQuery.about_complex}/>
       <Numbers number={objectQuery.object_metrics}/>
      <BeforAfter befor={objectQuery.before_after} />
      <Numeration numeration={objectQuery.numeration}/>

     

      {/* <Loc />
      <Near/> */}
      {/* <Live/> */}
    </div>
  );
}

export default ObjectDetail;