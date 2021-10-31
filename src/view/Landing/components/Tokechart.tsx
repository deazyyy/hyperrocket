import React, { PureComponent, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

interface Props {}
const data = [
  { name: "Group A", value: 400, fill: "red" },
  { name: "Group B", value: 300, fill: "blue" },
  { name: "Group C", value: 300, fill: "pink" },
  { name: "Group D", value: 200, fill: "#fff" },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
const data01 = [
  {
    name: "BNB REWARDS",
    value: 5,
    fill: "#198995",
  },
  {
    name: "DEV/OWNER",
    value: 2,
    fill: "#17394d",
  },
  {
    name: "MARKETING",
    value: 5,
    fill: "#154d61",
  },
  {
    name: "LIQUIDITY",
    value: 3,
    fill: "#73e7f5",
  },
];

const Tokechart: React.FC<Props> = () => {
  const [activeindex, setActiveindex] = useState(0);
  const onPieEnter = (e: any) => {
    // setActiveindex(index)
  };

  const RADIAN = Math.PI / 180;
  // @ts-ignore
  // const renderCustomizedLabel = ({
  //   cx,
  //   cy,
  //   midAngle,
  //   innerRadius,
  //   outerRadius,
  //   percent,
  //   index,
  //   name,
  //   value,
  // }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 2.8;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <>
  //       <text
  //         x={x}
  //         y={y}
  //         fill="white"
  //         letterSpacing={3}
  //         textAnchor={x > cx ? "start" : "end"}
  //         dominantBaseline="central"
  //       >
  //         {`${name} `}
  //       </text>
  //       <text
  //         x={x}
  //         y={y + 20}
  //         fill="#c1d9e2"
  //         fontSize={12}
  //         fontWeight={400}
  //         textAnchor={x > cx ? "start" : "end"}
  //         dominantBaseline="central"
  //         className="pietext"
  //       >
  //         {`${value}.00 %`}
  //       </text>
  //     </>
  //   );
  // };
  // @ts-ignore
  // const [piewidth, setPiewidth] = React.useState(500);

  // const handleResize = (width: any) => {
  //   console.log(width);
  //   return (
  //     <PieChart width={width} height={width * 0.8}>
  //       <Pie
  //         stroke="none"
  //         data={data01}
  //         dataKey="value"
  //         nameKey="name"
  //         cx="50%"
  //         cy="50%"
  //         fill="fill"
  //         innerRadius={width * 0.25 - 40}
  //         outerRadius={width * 0.25}
  //         label={renderCustomizedLabel}
  //       />
  //     </PieChart>
  //   );
  // };
  // React.useEffect(() => {
  //   // @ts-ignore
  //   if(document.getElementsByClassName('mychart')[0].offsetWidth && piewidth == 0){
  //     // @ts-ignore
  //   setPiewidth(document.getElementsByClassName('mychart')[0].offsetWidth)
  //   }
  //   handleResize(piewidth)
  // }, []);

  // window.addEventListener("resize", function () {
  //   console.log(document.getElementsByClassName("mychart")[0].offsetWidth);
  //   handleResize(document.getElementsByClassName("mychart")[0].offsetWidth);
  // });

  // React.useEffect(() => {
  //   handleResize(document.getElementsByClassName("mychart")[0].offsetWidth);
  // }, [window.innerWidth]);
  return (
    <section className="tokechart-bx">
      <img src="img/arc.png" className="arcimage" />
      <div
        className="heading wow fadeInDown"
        data-wow-duration="0.6s"
        data-wow-delay="0.3s"
      >
        <h1>
          tokenomics <br />
          15% total buy/sell tax
        </h1>
        <div
          className="mychart wow fadeInDown"
          data-wow-duration="0.6s"
          data-wow-delay="0.3s"
        >
          <img src="img/donut.svg" />
          {/* {
    handleResize(piewidth)}

        <PieChart width={400} height={400}>
          
          <Pie
            activeIndex={activeindex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={(e) => onPieEnter(e)}
          />
        </PieChart> */}
        </div>
      </div>
    </section>
  );
};

export default Tokechart;
