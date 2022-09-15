import express from "express";
import mongoose from "mongoose";
import http from "http";
import { config } from "./Config/config";

const router = express();

mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
