/* eslint-disable @next/next/no-img-element */
import { IServiceCounter } from "../models/service.model";
import React from "react";
interface serviceProps {
  counters: IServiceCounter[];
}

export default function ServiceCounter({ counters }: serviceProps) {
  return (
    <div     data-aos="zoom-out-up"
    // data-aos-offset="150"
    data-aos-easing="ease-out-quart"
    // data-aos-once="false" data-aos-anchor-placement="top-center"
    >
      {counters &&
        counters.map((count: any, index: number) => {
          return (
            <div className="service_development_container" key={index}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="app_development_title">{count.title}</h2>
                  </div>
                </div>
                <div className="row">
                  {count.columns &&
                    count.columns.map((column: any, columnIndex: number) => (
                      <div className="col-lg-4 col-md-4 mt-3 mb-2" key={columnIndex}>
                        <div className="app_count_wrapper wow fadeInLeftBig">
                          {/* <img
                            style={{ width: "25%" }}
                            src={column.image}
                            alt="services counter icon"
                          /> */}
                          <h2>{column.value}</h2>
                          {/* <p>{count.info1}</p> */}
                          <ul>
                            {column.lists &&
                              column.lists.map(
                                (listItem: any, listItemIndex: number) => {
                                  return (
                                    <li key={listItemIndex}>{listItem.list}</li>
                                  );
                                }
                              )}
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
