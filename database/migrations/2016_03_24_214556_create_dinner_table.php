<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDinnerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dinners', function(Blueprint $table){
            $table->increments('id');
            $table->string('name');
            $table->text('ingerdients');
            $table->string('preperation');
            $table->string('misc');
            $table->float('price');
            $table->boolean('cheap');
            $table->boolean('easy');
            $table->boolean('fast');
            $table->integer('user_id');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('dinners');
    }
}
