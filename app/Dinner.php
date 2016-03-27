<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dinner extends Model
{
    protected $fillable = [
        'name',
        'ingerdients',
        'preperation',
        'misc',
        'cheap',
        'easy',
        'fast',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
