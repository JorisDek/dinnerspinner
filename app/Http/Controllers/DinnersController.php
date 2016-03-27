<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\Dinner;
use App\Http\Requests;

class DinnersController extends Controller
{
    public function index()
    {
        $dinners = Dinner::all();

        return $dinners;
    }

    public function show(Dinner $dinners)
    {
        return $dinners;
    }

    public function create()
    {
        
    }

    public function store(Request $request)
    {
        Dinner::create($request->all());
    }

    public function edit()
    {

    }

    public function update(Request $request, Dinner $dinners)
    {
        $dinners->update($request->all());
    }

    public function destroy(Dinner $dinners)
    {
        $dinners->delete();
    }

    public function spinner($cheap, $easy, $fast)
    {
        $dinners = Dinner::where('cheap', $cheap)->where('easy', $easy)->where('fast', $fast)->get();

        return $dinners->random();
    }

}
