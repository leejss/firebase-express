import * as functions from "firebase-functions";
import { ExpressConfig } from "./app";
const app = new ExpressConfig().app;

export const express = functions.https.onRequest(app);
