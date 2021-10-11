<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class UserFoodController extends Controller
{
    private $privateApiUrl;

    public function __construct()
    {
        $this->privateApiUrl = env('PRIVATE_API_URL');
    }

    public function foods(int $userId)
    {
        $response = Http::get("{$this->privateApiUrl}/users/{$userId}/foods");
        return $response->json();
    }

    public function food(int $userId, int $foodId)
    {
        $response = Http::get("{$this->privateApiUrl}/users/{$userId}/foods/{$foodId}");
        return $response->json();
    }

    public function deleteFood(int $userId, int $foodId)
    {
        $response = Http::delete("{$this->privateApiUrl}/users/{$userId}/foods/{$foodId}");
        return $response->json();
    }

    public function addFood(Request $request, int $userId, int $foodId)
    {
        $servingsPerWeek = $request->input('servingsPerWeek');
        if ($servingsPerWeek < 1) {
            return response('Servings per week must be greater than 0.', 400);
        }
        
        $response = Http::put("{$this->privateApiUrl}/users/{$userId}/foods/{$foodId}", [
            'servingsPerWeek' => $servingsPerWeek
        ]);
        return $response->json();
    }
}
