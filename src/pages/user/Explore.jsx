import React from "react";
import bg_explore from "../../../public/bg-explore.jpeg";
import { Button, Input, Select } from "antd";
const { Search } = Input;

const Explore = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="relative">
        <div className="w-full h-[450px]">
          <img
            className="w-full h-full rounded-2xl object-cover"
            src={bg_explore}
            alt=""
          />
        </div>
        <div className="absolute top-[70%] flex items-start gap-4 justify-between w-full px-4">
          <div className="w-[70%] p-4 rounded-2xl bg-[#44403c] flex gap-4 items-center flex-wrap">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              className="w-[300px]"
            />
            <Select
              defaultValue="Type"
              className="flex-1"
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
            <Button.Group>
              <Button className="text-white" value={0}>
                Room
              </Button>
              <Button className="text-white" value={1}>
                1
              </Button>
              <Button className="text-white" value={2}>
                2
              </Button>
              <Button className="text-white" value={3}>
                3+
              </Button>
              <Button className="text-white" value={4}>
                4+
              </Button>
            </Button.Group>
            <Button className="text-white">More</Button>
            <Select
              defaultValue="Min Price"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
            <Select
              defaultValue="Max Price"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
            <Select
              defaultValue="Floor area"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
              ]}
            />
          </div>
          <div className="flex-1 rounded-2xl bg-[#f3f4f5]"></div>
        </div>
      </div>
    </>
  );
};

export default Explore;
