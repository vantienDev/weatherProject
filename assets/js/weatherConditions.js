// Dùng để dịch các từ tiếng Anh chỉ thời tiết sang tiếng Việt

export const weatherConditions = {
  // Group 200 - 232: Thunderstorm
  thunderstorm: {
    id: 211,
    description: "  Trời có giông",
  },
  thunderstormwithlightrain: {
    id: 200,
    description: "Giông kèm mưa nhẹ",
  },
  thunderstormwithrain: {
    id: 201,
    description: "Giông kèm mưa",
  },
  thunderstormwithheavyrain: {
    id: 202,
    description: "Giông kèm mưa lớn",
  },
  lightthunderstorm: {
    id: 210,
    description: "Có giông nhẹ",
  },
  heavythunderstorm: {
    id: 212,
    description: "Có giông lớn",
  },
  raggedthunderstorm: {
    id: 221,
    description: "Có giông bão",
  },
  thunderstormwithlightdrizzle: {
    id: 230,
    description: "Giông kèm mưa phùn nhẹ",
  },
  thunderstormwithdrizzle: {
    id: 231,
    description: "Giông kèm mưa phùn",
  },
  thunderstormwithheavydrizzle: {
    id: 232,
    description: "Giông kèm mưa phùn mạnh",
  },

  //   Group 300-321: Drizzle
  lightintensitydrizzle: {
    id: 300,
    description: "Mưa phùn cường độ nhẹ",
  },
  rizzle: {
    id: 301,
    description: "  Mưa phùn",
  },
  heavyintensitydrizzle: {
    id: 302,
    description: "Mưa phùn cường độ nặng",
  },
  lightintensitydrizzlerain: {
    id: 310,
    description: "Mưa phùn cường độ nhẹ",
  },
  drizzlerain: {
    id: 311,
    description: "Mưa phùn",
  },
  heavyintensitydrizzlerain: {
    id: 312,
    description: "Mưa phùn cường độ nặng",
  },
  showerrainanddrizzle: {
    id: 313,
    description: "Mưa phùn",
  },
  heavyshowerrainanddrizzle: {
    id: 314,
    description: "Mưa phùn cường độ nặng",
  },
  showerdrizzle: {
    id: 321,
    description: "Mưa phùn",
  },

  //   Group 500 - 531: Rain

  lightrain: {
    id: 500,
    description: "Mưa nhỏ",
  },
  moderaterain: {
    id: 501,
    description: "Mừa vừa",
  },
  heavyintensityrain: {
    id: 502,
    description: "Mừa lớn",
  },
  veryheavyrain: {
    id: 503,
    description: "Mừa rất lớn",
  },
  extremerain: {
    id: 504,
    description: "Mưa cực lớn",
  },
  freezingrain: {
    id: 511,
    description: "Mưa lạnh",
  },
  lightintensityshowerrain: {
    id: 520,
    description: "Mưa rào cường độ nhẹ",
  },
  showerrain: {
    id: 521,
    description: "Có mưa rào",
  },
  heavyintensityshowerrain: {
    id: 521,
    description: "Mưa rào cường độ lớn",
  },
  raggedshowerrain: {
    id: 521,
    description: "Có mưa rào",
  },

  //   Group 600-622: Snow
  lightsnow: {
    id: 600,
    description: "Tuyết nhẹ",
  },
  snow: {
    id: 601,
    description: "Có tuyết",
  },
  heavysnow: {
    id: 602,
    description: "Tuyết lớn",
  },
  sleet: {
    id: 611,
    description: "Mưa tuyết",
  },
  lightshowersleet: {
    id: 612,
    description: "Mưa tuyết nhỏ ",
  },
  showesleet: {
    id: 613,
    description: "Mưa tuyết",
  },
  lightrainandsnow: {
    id: 615,
    description: "Tuyết nhẹ kèm mưa",
  },
  rainandsnow: {
    id: 616,
    description: "Tuyết kèm mưa",
  },
  lightshowersnow: {
    id: 620,
    description: "Mưa tuyết nhẹ",
  },
  showesnow: {
    id: 621,
    description: "Mưa tuyết",
  },
  heavyshowersnow: {
    id: 622,
    description: "Mưa tuyết lớn",
  },

  //   Group 800: Clear
  clearsky: {
    id: 800,
    description: "Bầu trời quang đãng",
  },

  // Group 801-804: Clouds
  fewclouds: {
    id: 801,
    description: "Trời ít mây",
  },
  scatteredclouds: {
    id: 802,
    description: "Trời có mây rải rác",
  },
  brokenclouds: {
    id: 803,
    description: "Trời có mây vụn",
  },
  overcastclouds: {
    id: 804,
    description: "Trời mây đen u ám",
  },
};
