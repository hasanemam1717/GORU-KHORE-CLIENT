import { useState } from "react";
import Cover from "../../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/UseMenu";
import OrderCard from "../TabOrdered/OrderCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categoryes = ['salad', 'pizza','dessert' ,'soup','drinks']
  const {category} = useParams()
  const initialIndex = categoryes.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  // console.log(menu);
  console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>GORU || Order</title>
      </Helmet>
      <Cover title={"Order food"} img={orderImg}></Cover>

      <Tabs className="md:ml-10" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Slad</Tab>
          <Tab>Pizza </Tab>
          <Tab>Dessert </Tab>
          <Tab>Soup </Tab>
          <Tab>Drinks </Tab>
        </TabList>
        <TabPanel>
           <OrderCard item={salad}></OrderCard>
        </TabPanel>  <TabPanel>
           <OrderCard item={pizza}></OrderCard>
        </TabPanel><TabPanel>
           <OrderCard item={soup}></OrderCard>
        </TabPanel><TabPanel>
           <OrderCard item={dessert}></OrderCard>
        </TabPanel><TabPanel>
           <OrderCard item={drinks}></OrderCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
