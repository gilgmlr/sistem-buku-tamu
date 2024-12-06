-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 06 Des 2024 pada 01.58
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sistem_buku_tamu`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akun`
--

CREATE TABLE `akun` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','tamu') DEFAULT 'tamu',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `bagian`
--

CREATE TABLE `bagian` (
  `KodeBagian` char(3) NOT NULL,
  `NamaBagian` varchar(60) NOT NULL,
  `Keterangan` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `bagian`
--

INSERT INTO `bagian` (`KodeBagian`, `NamaBagian`, `Keterangan`) VALUES
('D02', 'Bagian Teknologi', 'Divisi IT dan Support');

-- --------------------------------------------------------

--
-- Struktur dari tabel `identitastamu`
--

CREATE TABLE `identitastamu` (
  `NoIdentitas` char(20) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `TempatLahir` varchar(25) DEFAULT NULL,
  `TglLahir` date DEFAULT NULL,
  `JenisKelamin` char(1) DEFAULT NULL CHECK (`JenisKelamin` in ('L','P')),
  `Alamat` varchar(100) DEFAULT NULL,
  `NoHandphone` varchar(15) DEFAULT NULL,
  `TlpRmh` char(12) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `KdPropinsi` char(2) DEFAULT NULL,
  `KdKotaKabupaten` varchar(4) DEFAULT NULL,
  `KdKecamatan` varchar(6) DEFAULT NULL,
  `KdKelurahan` varchar(9) DEFAULT NULL,
  `Kodepos` varchar(5) DEFAULT NULL,
  `KdJenisId` char(2) DEFAULT NULL,
  `PhotoDirKtp` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `identitastamu`
--

INSERT INTO `identitastamu` (`NoIdentitas`, `Nama`, `TempatLahir`, `TglLahir`, `JenisKelamin`, `Alamat`, `NoHandphone`, `TlpRmh`, `Email`, `KdPropinsi`, `KdKotaKabupaten`, `KdKecamatan`, `KdKelurahan`, `Kodepos`, `KdJenisId`, `PhotoDirKtp`) VALUES
('3273221306720011', 'Aditya Eprisi', 'Bandar Lampung', '2006-03-02', 'L', 'Jl. Hanjuang 6 No.200 Blok H7', '081234567890', '072123456789', 'aditya@example.com', '01', '1234', '567890', '123456789', '12345', '1', 0x626173653634456e636f646564496d6167654461746148657265);

-- --------------------------------------------------------

--
-- Struktur dari tabel `subbag`
--

CREATE TABLE `subbag` (
  `KdSubBag` char(6) NOT NULL,
  `KodeBagian` char(3) NOT NULL,
  `Jabatan` varchar(60) DEFAULT NULL,
  `Keterangan` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `subbag`
--

INSERT INTO `subbag` (`KdSubBag`, `KodeBagian`, `Jabatan`, `Keterangan`) VALUES
('D02-01', 'D02', 'Kepala SubBag Update', 'Bagian Operasional Update');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tamu`
--

CREATE TABLE `tamu` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `nik` varchar(16) NOT NULL,
  `alamat` text NOT NULL,
  `jenis_kelamin` enum('L','P') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tiketantrean`
--

CREATE TABLE `tiketantrean` (
  `NoTiket` char(10) NOT NULL,
  `TglBuatTiket` datetime NOT NULL,
  `StatusTiket` enum('Berlaku','Kadaluarsa') NOT NULL,
  `StatusCetak` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tiketantrean`
--

INSERT INTO `tiketantrean` (`NoTiket`, `TglBuatTiket`, `StatusTiket`, `StatusCetak`) VALUES
('T001', '2023-12-06 00:00:00', 'Kadaluarsa', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tikettamu`
--

CREATE TABLE `tikettamu` (
  `NoTiket` char(22) NOT NULL,
  `NoIdentitas` char(20) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `KdBagSubSeksi` char(3) DEFAULT NULL,
  `KdSubBagSeksi` char(6) DEFAULT NULL,
  `Jabatan` varchar(60) DEFAULT NULL,
  `KeperluanBertamu` varchar(60) DEFAULT NULL,
  `TglMintaBertamu` date DEFAULT NULL,
  `MintaJamBertamu` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tikettamu`
--

INSERT INTO `tikettamu` (`NoTiket`, `NoIdentitas`, `Nama`, `KdBagSubSeksi`, `KdSubBagSeksi`, `Jabatan`, `KeperluanBertamu`, `TglMintaBertamu`, `MintaJamBertamu`) VALUES
('TT0001', '3273221306720011', 'Aditya Eprisi', 'D02', 'D02-01', 'Kepala SubBag', 'Rapat', '2023-12-07', '10:00:00');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akun`
--
ALTER TABLE `akun`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indeks untuk tabel `bagian`
--
ALTER TABLE `bagian`
  ADD PRIMARY KEY (`KodeBagian`);

--
-- Indeks untuk tabel `identitastamu`
--
ALTER TABLE `identitastamu`
  ADD PRIMARY KEY (`NoIdentitas`);

--
-- Indeks untuk tabel `subbag`
--
ALTER TABLE `subbag`
  ADD PRIMARY KEY (`KdSubBag`),
  ADD KEY `KodeBagian` (`KodeBagian`);

--
-- Indeks untuk tabel `tamu`
--
ALTER TABLE `tamu`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nik` (`nik`);

--
-- Indeks untuk tabel `tiketantrean`
--
ALTER TABLE `tiketantrean`
  ADD PRIMARY KEY (`NoTiket`);

--
-- Indeks untuk tabel `tikettamu`
--
ALTER TABLE `tikettamu`
  ADD PRIMARY KEY (`NoTiket`),
  ADD KEY `NoIdentitas` (`NoIdentitas`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `akun`
--
ALTER TABLE `akun`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tamu`
--
ALTER TABLE `tamu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `subbag`
--
ALTER TABLE `subbag`
  ADD CONSTRAINT `subbag_ibfk_1` FOREIGN KEY (`KodeBagian`) REFERENCES `bagian` (`KodeBagian`);

--
-- Ketidakleluasaan untuk tabel `tikettamu`
--
ALTER TABLE `tikettamu`
  ADD CONSTRAINT `tikettamu_ibfk_1` FOREIGN KEY (`NoIdentitas`) REFERENCES `identitastamu` (`NoIdentitas`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
