<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    private $privateApiUrl;

    public function __construct()
    {
        $this->privateApiUrl = env('PRIVATE_API_URL');
    }

    public function index()
    {
        return response('Hello foody!', 200);
    }

    public function healthcheck()
    {
        $response = Http::get("{$this->privateApiUrl}/healthcheck");
        if ($response->ok()) {
            return response('ok', 200);
        }
    }
}
