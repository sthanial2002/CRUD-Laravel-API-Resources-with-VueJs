<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DeveloperFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail(),
            'position' => $this->faker->randomElement(['Developer Backend', 'Developer Frontend', 'Developer Full Stack', 'Designer UI/UX']),
            'status' => $this->faker->randomElement(['Online', 'Offline']),
        ];
    }
}
