import React from "react";
import Card from "../card/page";
import { listData } from "../../lib/dumyData";
const List = ({posts}) => {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
