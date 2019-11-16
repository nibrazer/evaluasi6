import React, { Component } from 'react';

import Berita from './components/button/berita';
import Header from './components/header/header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Berita: [
        {
          title:
            "Pemprov DKI Lelang 12 Jabatan, PKB Minta Calon yang Bisa Sinergi dengan DPRD",
          pubDate: "2019-11-16 00:49:06",
          author: "Rian RK.",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2016/08/02/b254c915-6bd5-4f5f-b681-6d456fbcd44a_169.jpg"
        },
        {
          title: "Tak Cukup Maaf untuk Penghina Almarhum Ustaz Taufik Hasnuri",
          pubDate: "2019-11-16 00:22:58",
          author: "Dimas Setyo",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2019/11/15/466c3c63-456b-43ff-91b7-a4487047860e_169.jpeg"
        },
        {
          title: "Gempa M 5,0 Terjadi di Jailolo Malut, Tak Berpotensi Tsunami",
          pubDate: "2019-11-16 00:18:59",
          author: "Prabumulih",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2019/07/05/a5bcecfe-5134-4905-a351-5b00d294c182_169.jpeg"
        },
        {
          title:
            "Rencana Jalan Berbayar di Margonda-Kalimalang Dinilai Bisa Urai Kepadatan di DKI",
          pubDate: "2019-11-16 00:02:57",
          author: "Satya Wacana",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2019/08/21/96421800-f5a2-4dde-9d02-7080abe63a3d_169.jpeg"
        },
        {
          title:
            "Moeldoko Saran Cegah Stunting dengan Ayam, Komisi IX: Lebih Baik Pendidikan",
          pubDate: "2019-11-15 23:49:01",
          author: "Ki Hajar",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2014/12/10/a3a245a0-328d-4423-9927-0c085e7b0f0e_169.jpg"
        },
        {
          title: "Anies Baswedan Bilang 'Poya Mothig Poya Haha', Bahasa Apa Itu?",
          pubDate: "2019-11-15 23:14:39",
          author: "Rosatalia",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2019/11/15/4c5677b2-d4cf-4cf4-ad59-e841b68c6788.jpeg"
        },
        {
          title: "Pemprov DKI Lelang 12 Jabatan, PDIP: Cari yang Paham Tupoksi",
          pubDate: "2019-11-15 23:00:05",
          author: "Risma W.",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2016/04/20/4133e645-ad4c-4f38-8109-1bc054cfaadd_169.jpg"
        },
        {
          title:
            "10 Airsoft Gun-Replika Pedang Milik Bos First Travel Ikut Dirampas Negara",
          pubDate: "2019-11-15 22:42:50",
          author: "Javad R",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2017/08/22/44908c15-e04c-4701-b27e-cbd1ab76a8cd_169.jpg"
        },
        {
          title: "Gempa M 4,5 Terjadi di Ambon Maluku",
          pubDate: "2019-11-15 22:05:52",
          author: "Fikri Hermansyah",
          thumbnail:
            "https://akcdn.detik.net.id/visual/2015/07/10/ceaea5cf-a1ca-4de1-8dd0-96092a0fc333_169.jpg"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App" >
        <Header />
        {this.state.Berita.map((item, index) => {
          return (
            <Berita key={index} judul={item.title} tanggal={item.pubDate} editor={item.author} gambar={item.thumbnail} />
          )
        })
        }
      </div>
    );
  }
}

export default App;