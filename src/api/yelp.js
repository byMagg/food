import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer E2W3UK-Rz1FmgLhs3YGsjNwQn42Wl3_Hc_6bhi7ew9YRwoKZIVEzmXgQpTSi72ZJN-9O35tkKc1VbvsB3JAIa22Mp4KodQmBgqHTGKKsjs0NkVIpvi9Iz7c5tWHCZHYx",
  },
});
