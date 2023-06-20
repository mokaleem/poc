import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
} from "@fluentui/react-components";
import { CaretDownFilled } from "@fluentui/react-icons";
import * as React from "react";
import { mergeStyles } from '@fluentui/react';

const smallerFontClass = mergeStyles({
  fontSize: '12px', // Adjust the font size as per your requirement
});

const mediumFontClass = mergeStyles({
  fontSize: '13px', // Adjust the font size as per your requirement
});

const items = [
  {
    category: "Margin",
    contractBaseline: "68.78%",
    deliveryBaseline: "71.54%",
    currentFinancialPlan: "70.70%",
    actuals: "55.31%",
    forecastETC: "12.3%",
    EAC: "94%",
    EACVariance: "0.41%",    
  },
  {
    category: "Labor (Hours)",
    contractBaseline: "68.78",
    deliveryBaseline: "71.54",
    currentFinancialPlan: "70.70",
    actuals: "55.31",
    forecastETC: "12.3",
    EAC: "94",
    EACVariance: "0.41",    
  },
  {
    category: "Units (EA)",
    contractBaseline: "68.78",
    deliveryBaseline: "71.54",
    currentFinancialPlan: "70.70",
    actuals: "55.31",
    forecastETC: "12.3",
    EAC: "94",
    EACVariance: "0.41",    
  },
  {
    category: "Cost (USD)",
    contractBaseline: "155,202.56",
    deliveryBaseline: "234,234.23",
    currentFinancialPlan: "999,999",
    actuals: "123,456",
    forecastETC: "789,789.23",
    EAC: "1",
    EACVariance: "-927,927.33",    
  },
  {
    category: "Revenue (USD)",
    contractBaseline: "767,202.56",
    deliveryBaseline: "214,214.21",
    currentFinancialPlan: "999,999",
    actuals: "1",
    forecastETC: "789",
    EAC: "123",
    EACVariance: "-999.33",
  },
];

const columns = [
  { columnKey: "category", label: "Category" },
  { columnKey: "contractBaseline", label: "Contract Baseline (Finalized)" },
  { columnKey: "deliveryBaseline", label: "Delivery Baseline (Finalized)" },
  { columnKey: "currentFinancialPlan", label: "Current Financial Plan (Active)" },
  { columnKey: "actuals", label: "Actuals nnnnnnnnnnnnnnnnnn" },
  { columnKey: "forecastETC", label: "Forecast / ETC nnnnnnnnnnnnn" },
  { columnKey: "EAC", label: "EAC nnnnnnnnnnnnnn" },
  { columnKey: "EACVariance", label: "EAC Variance to Delivery Baseline" },  
];

export const MyTable = () => {
  const [showCostRows, setShowCostRows] = React.useState(false);
  const [showRevenueRows, setShowRevenueRows] = React.useState(false);

  const handleCostClick = () => {
    setShowCostRows(!showCostRows);
  };

  const handleRevenueClick = () => {
    setShowRevenueRows(!showRevenueRows);
  };

  return (
    <Table size="small" 
          aria-label="Default table" 
          className={mediumFontClass}>
      <TableHeader>
        <TableRow className={smallerFontClass}>
          {columns.map((column) => (
            <TableHeaderCell
              key={column.columnKey}
            >{column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <React.Fragment key={item.category}>
            <TableRow>
            {item.category === "Cost (USD)" ? (
              <TableCell onClick={handleCostClick} style={{ cursor: "pointer"}}>
                <CaretDownFilled />
                {item.category}
              </TableCell>
            ) : item.category === "Revenue (USD)" ? (
              <TableCell onClick={handleRevenueClick} style={{ cursor: "pointer"}}>
                <CaretDownFilled />
                {item.category}
              </TableCell>
            ) : (
              <TableCell>{item.category}</TableCell>
            )}
              <TableCell>{item.contractBaseline}</TableCell>
              <TableCell>{item.deliveryBaseline}</TableCell>
              <TableCell>{item.currentFinancialPlan}</TableCell>
              <TableCell>{item.actuals}</TableCell>
              <TableCell>{item.forecastETC}</TableCell>
              <TableCell>{item.EAC}</TableCell>
              <TableCell>{item.EACVariance}</TableCell>
            </TableRow>
            {showCostRows &&
              item.category === "Cost (USD)" &&
              <>
                <TableRow>
                  <TableCell style={{ paddingLeft: "20px"}}>New Row 1</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingLeft: "20px"}}>New Row 2</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>3</TableCell>
                </TableRow>
              </>
            }
            {showRevenueRows &&
              item.category === "Revenue (USD)" &&
              <>
                <TableRow >
                  <TableCell style={{ paddingLeft: "20px"}}>New Row 1</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingLeft: "20px"}}>New Row 2</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
              </>
            }
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};
