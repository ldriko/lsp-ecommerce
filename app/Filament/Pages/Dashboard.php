<?php

namespace App\Filament\Pages;

use App\Filament\Widgets\OrderOverview;
use App\Filament\Widgets\RecentOrders;
use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Icons\Heroicon;

class Dashboard extends Page
{
    protected string $view = 'filament.pages.dashboard';

    protected static BackedEnum|string|null $navigationIcon = Heroicon::OutlinedHome;

    protected function getHeaderWidgets(): array
    {
        return [
            OrderOverview::class,
            RecentOrders::class,
        ];
    }
}
