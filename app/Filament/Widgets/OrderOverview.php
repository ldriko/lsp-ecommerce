<?php

namespace App\Filament\Widgets;

use App\Models\Order;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OrderOverview extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Pembelian', Order::count()),
        ];
    }
}
