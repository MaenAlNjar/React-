import React from "react";
import { listData } from "../../lib/dumyData";
import Filter from "../../components/filter/page";
import Card from "../../components/card/page";
import Map from "../../components/map/map";
import "./listPage.css";
const ListPage = () => {
  const data = listData;
  console.log(data);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
