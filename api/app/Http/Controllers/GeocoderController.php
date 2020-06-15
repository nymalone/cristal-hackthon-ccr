<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class GeocoderController extends Controller
{
    public function getAddressGeocode(Request $request)
    {
        if($request->address){
            $client = new Client();
            $res= $client->get(
                'https://geocode.search.hereapi.com/v1/geocode?q='.$request->address.' &apiKey='.env('HERE_API_KEY')
            );

            return response()->json(
                json_decode(
                    ($res->getBody())->getContents()
                )
            );
        }
        return response()->json(
            'No address request', 400
        );
    }


}
