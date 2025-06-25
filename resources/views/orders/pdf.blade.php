<!DOCTYPE html>
<html lang="en">

<head>
    <title>Order #{{ $order->id }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet">
    <style>
        * {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>

<body class="font-sans text-sm">
    <div class="grid gap-3">
        <div>
            <div class="font-bold">Toko Alat Kesehatan</div>
            <div>Order #{{ $order->id }}</div>
        </div>
        <div>
            <div>Tanggal: {{ $order->created_at->format('d/m/Y') }}</div>
            <div>Atas Nama: {{ $order->user->name }}</div>
            <div>Telepon: {{ $order->user->phone }}</div>
            <div>Alamat: {{ $order->user->address }}</div>
        </div>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="border px-2 py-1 text-left">Produk</th>
                    <th class="border px-2 py-1 text-left">Qty</th>
                    <th class="border px-2 py-1 text-left">Harga Satuan</th>
                    <th class="border px-2 py-1 text-left">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($order->lines as $line)
                    <tr>
                        <td class="border px-2 py-1">{{ $line->product->name }}
                        </td>
                        <td class="border px-2 py-1">{{ $line->qty }}</td>
                        <td class="border px-2 py-1">Rp
                            {{ number_format($line->price, 0, ',', '.') }}</td>
                        <td class="border px-2 py-1">Rp
                            {{ number_format($line->qty * $line->price, 0, ',', '.') }}
                        </td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"
                        class="fon t-bold border px-2 py-1 text-right">Total
                    </td>
                    <td class="border px-2 py-1 font-bold">Rp
                        {{ number_format($order->total, 0, ',', '.') }}</td>
                </tr>
            </tfoot>
        </table>
        <div>
            Terima kasih telah berbelanja di Toko Alat Kesehatan.
        </div>
    </div>
    <div class="text-end font-bold mt-6">TTD Toko Alat Kesehatan</div>
</body>

</html>
