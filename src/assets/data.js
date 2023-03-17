let option_sector_time = {
  series: [
    {
      type: "pie",
      data: [
        {
          value: 90,
          name: "00:00~01:00",
        },
        {
          value: 90,
          name: "01:00~02:00",
        },
        {
          value: 90,
          name: "02:00~03:00",
        },
        {
          value: 80,
          name: "03:00~04:00",
        },
        {
          value: 70,
          name: "04:00~05:00",
        },
        {
          value: 60,
          name: "05:00~06:00",
        },
        {
          value: 50,
          name: "06:00~07:00",
        },
        {
          value: 40,
          name: "07:00~08:00",
        },
        {
          value: 90,
          name: "08:00~09:00",
        },
      ],
    },
  ],
};
let option_bar = {
  tooltip: {},
  xAxis: {
    data: ["总记录数", "总正常记录", "总异常记录"],
  },
  yAxis: {},
  series: [
    {
      name: "数量",
      type: "bar",
      data: [1000, 990, 10],
    },
  ],
};
let option_sector_num = {
  series: [
    {
      type: "pie",
      data: [
        {
          value: 990,
          name: "总正常记录",
        },
        {
          value: 10,
          name: "总异常记录",
        },
      ],
    },
  ],
};
let tableData = [
  {
    id: "1",
    index: 1,
    ipAdr: "127.0.0.1",
    joggleName: "getUserInfo",
    requestType: "get",
    requestFrequency: 200,
    behaviorType: "恶意",
  },
  {
    id: "2",
    index: 2,
    ipAdr: "127.0.0.2",
    joggleName: "getUserInfo",
    requestType: "get",
    requestFrequency: 200,
    behaviorType: "恶意",
  },
];
let dateOptions = ["全部", "当年", "当月", "当天"];
let typeOptions = ["全部请求", "正常请求", "恶意请求"];
let trendYearOption = {
  xAxis: {
    type: "category",
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 120, 200, 150, 120, 200, 150, 120, 200, 150],
      type: "line",
    },
  ],
};
export {
  option_sector_time,
  option_bar,
  option_sector_num,
  dateOptions,
  typeOptions,
  tableData,
  trendYearOption,
};
