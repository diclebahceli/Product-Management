import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from 'https://deno.land/x/og_edge/mod.ts'
import App from "../../../src/App.js";



export default function handler(req:Request) {
  const params = new URLSearchParams(req.url.split('/og-image/')[1] || '');
  const productName = params.toString().substring(0, params.toString().length - 1);

  
  const responseBody = (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 128,
        background: 'lavender',
      }}
    >
      {productName} 
    </div>
  );
  const response = new ImageResponse(responseBody, {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000', 
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
  });
  return response;

  
}
