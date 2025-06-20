<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->after('password', function (Blueprint $table) {
                $table->enum('gender', ['male', 'female', 'other'])
                    ->default('other');
                $table->date('date_of_birth')->nullable()->after('email');
                $table->string('city')->nullable();
                $table->text('address')->nullable();
                $table->string('phone')->nullable();
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'date_of_birth',
                'gender',
                'city',
                'address',
                'phone',
            ]);
        });
    }
};
