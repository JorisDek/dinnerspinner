<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

            User::create([
                'name' => 'Joris',
                'email' => 'dragster66@gmail.com',
                'password' => bcrypt('secret')
            ]);
    }
}
