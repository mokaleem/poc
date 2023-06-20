import {
    makeStyles,
    shorthands,
    tokens,
    Tab,
    TabList,
  } from "@fluentui/react-components";
  import * as React from "react";
  
  import {
    DocumentContract16Filled,
    DocumentContract16Regular,
    PeopleFilled,
    PeopleRegular,
    bundleIcon,
  } from "@fluentui/react-icons";
  
  const PeopleIcon = bundleIcon(PeopleFilled, PeopleRegular);
  const SubConIcon = bundleIcon(DocumentContract16Filled, DocumentContract16Regular);
  
  const useStyles = makeStyles({
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      ...shorthands.padding("50px", "20px"),
      rowGap: "20px",
    },
    panels: {
      ...shorthands.padding(0, "10px"),
      "& th": {
        textAlign: "left",
        ...shorthands.padding(0, "30px", 0, 0),
      },
    },
    propsTable: {
      "& td:first-child": {
        fontWeight: tokens.fontWeightSemibold,
      },
      "& td": {
        ...shorthands.padding(0, "30px", 0, 0),
      },
    },
  });
  
  export const MyTab = () => {
    const styles = useStyles();
  
    const [selectedValue, setSelectedValue] =
      React.useState("conditions");
  
    const onTabSelect = (event, data) => {
      setSelectedValue(data.value);
    };
  
    const Labor = React.memo(() => (
      <div role="tabpanel" aria-labelledby="Labor">
        <table>
          <thead>
            <th>Origin</th>
            <th>Gate</th>
            <th>ETA</th>
          </thead>
          <tbody>
            <tr>
              <td>DEN</td>
              <td>C3</td>
              <td>12:40 PM</td>
            </tr>
            <tr>
              <td>SMF</td>
              <td>D1</td>
              <td>1:18 PM</td>
            </tr>
            <tr>
              <td>SFO</td>
              <td>E18</td>
              <td>1:42 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  
    const SubconFF = React.memo(() => (
      <div role="tabpanel" aria-labelledby="Departures">
        <table>
          <thead>
            <th>Destination</th>
            <th>Gate</th>
            <th>ETD</th>
          </thead>
          <tbody>
            <tr>
              <td>MSP</td>
              <td>A7</td>
              <td>8:26 AM</td>
            </tr>
            <tr>
              <td>DCA</td>
              <td>N2</td>
              <td>9:03 AM</td>
            </tr>
            <tr>
              <td>LAS</td>
              <td>E15</td>
              <td>2:36 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  
    return (
      <div className={styles.root}>
        <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
          <Tab id="Labor" icon={<PeopleIcon />} value="labor">
            Labor
          </Tab>
          <Tab id="SubconFF" icon={<SubConIcon />} value="subcon">
            Subcon FF
          </Tab>
        </TabList>
        <div className={styles.panels}>
          {selectedValue === "labor" && <Labor />}
          {selectedValue === "subcon" && <SubconFF />}
        </div>
      </div>
    );
  };