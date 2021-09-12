import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import { changeTab, selectedTab } from "./tabsSlice";
import { useHistory } from "react-router";

const PageTabs = () => {
  const [value, setValue] = useState("/");
  const dispatch = useDispatch();
  const currentTab = useSelector(selectedTab);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(changeTab({ path: newValue }));
  };

  useEffect(() => {
    setValue(currentTab.path);
    history.push(currentTab.path);
    // eslint-disable-next-line
  }, [currentTab]);

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab label="ABOUT" value="/" />
        <Tab label="CONTACTS" value="/contacts" />
      </Tabs>
    </div>
  );
};

export default PageTabs;
