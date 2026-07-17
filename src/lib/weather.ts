export const getUvLevel = (uv: number | undefined) => {
  if (uv == null) {
    return {
      label: "--",
      risk: "--",
      borderColor: "border-gray-400",
    };
  }
  if (uv >= 11) {
    return {
      label: "Extreme",
      risk: "Extreme exposure risk",
      borderColor: "border-violet-700",
    };
  }
  if (uv >= 8) {
    return {
      label: "Very high",
      risk: "High exposure risk",
      borderColor: "border-red-600",
    };
  }
  if (uv >= 6) {
    return {
      label: "High",
      risk: "High exposure risk",
      borderColor: "border-orange-400",
    };
  }
  if (uv >= 3) {
    return {
      label: "Moderate",
      risk: "Moderate exposure risk",
      borderColor: "border-yellow-400",
    };
  }

  return {
    label: "Low",
    risk: "Low exposure risk",
    borderColor: "border-green-400",
  };
};

export const getRainLevel = (chanceOfRain: number | undefined) => {
  return chanceOfRain == null
    ? "--"
    : chanceOfRain >= 80
      ? "Very high"
      : chanceOfRain >= 50
        ? "High"
        : chanceOfRain >= 20
          ? "Moderate"
          : "Low";
};

export const getFeelsLikeDescription = (
  temp: number | undefined,
  feelsLike: number | undefined,
) => {
  return temp == null || feelsLike == null
    ? "--"
    : Math.abs(feelsLike - temp) < 1
      ? "Similar"
      : feelsLike > temp
        ? "Warmer"
        : "Cooler";
};
