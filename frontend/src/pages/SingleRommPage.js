import React, { useContext } from "react";
import { MyContext } from "../Context";
import Title from "../components/Title";
import BannerComponent from "../components/BannerComponent";

export default function SingleRommPage({ match }) {
  const context = useContext(MyContext);
  const room = context.rooms.find(
    (room) => room.room_slug === match.params["room_slug"]
  );
  if (!room) {
    return <div>Error</div>;
  } else {
    return (
      <>
        <BannerComponent room={room} />
        <div className="container my-5 align-items-center justify-content">
          <Title title="Description" />

          <div className="row">
            <div className="col-md-6 m-auto">
              <h6>Details</h6>
              <p className="text-justify" style={{ width: "80%" }}>
                {room.description}
              </p>
            </div>
            <div className="col-md-6 mb-5">
              <h6>Information</h6>
              <p>Price LE {room.price}</p>
              {/* <p>Size {room.room_size} Sqr Feet</p> */}
              <p>Maximum capacity: {room.capacity} People</p>
              <p>Transportation Included</p>
              <h6>Payment Detail</h6>
              <p>Orange Money: +232 75754243</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
