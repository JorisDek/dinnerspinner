<?php

use App\Dinner;
use Illuminate\Database\Seeder;

class DinnersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for($i = 0; $i < 30; $i++){
            Dinner::create([
                'name' => $faker->word,
                'ingerdients' => $faker->paragraph(3, true),
                'preperation' => $faker->paragraph(3, true),
                'misc' => $faker->paragraph(3, true),
                'price' => $faker->randomFloat(2, 0, 100),
                'cheap' => $faker->boolean,
                'easy' => $faker->boolean,
                'fast' => $faker->boolean,
                'user_id' => 1
            ]);
        }
    }
}
