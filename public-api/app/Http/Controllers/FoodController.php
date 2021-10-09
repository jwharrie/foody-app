<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    private $privateApiUrl;

    public function __construct()
    {
        $this->privateApiUrl = env('PRIVATE_API_URL');
    }

    public function index(Request $request)
    {
        $search = $request->input('search');
        
        $response = Http::get("{$this->privateApiUrl}/foods", [
            'search' => $search
         ]);
        return $response->json();
    }

    public function show(int $foodId)
    {
        $response = Http::get("{$this->privateApiUrl}/foods/{$foodId}");
        return $response->json();
    }
}
