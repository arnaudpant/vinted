const NewsFeed = ({
  title,
  products,
  users,
}: {
  title: string;
  products: Product[];
  users?: User[];
}) => {
  const imageProfile: string[] = [
    'https://imgs.search.brave.com/87PGvL4dza-B4QIU46k5CNEdKpSV4DBvDhBBE3o22WU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by91dG9waXgtbmV4/dC13ZWJzaXRlL1ky/RTRPVEkzTnpRdE5t/VXlPQzAwWW1VMkxX/RTVaamN0T0RjeFky/UmxNemcyWkRJeV8y/NmRmYzQzZS0zMWRk/LTQ2M2YtYWQwNC01/NmYzOWE0MzA2OTFf/cHJvZmlsaG9tbWUx/LmpwZz9peGxpYj1q/cy0zLjguMCZ3PTM4/NDAmYXV0bz1mb3Jt/YXQmZml0PW1heA',
    'https://imgs.search.brave.com/RQ9PgzfDYh2EPFIR97KPYDolXcq41N8FT_iNGRPaTcM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/Mzg3NjE2ODEwMzMt/NjQ2MWZmYWQ4ZDgw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TWpCOGZI/QnliMlpwYkdWOFpX/NThNSHg4TUh4OGZE/QT0',
    'https://imgs.search.brave.com/RZdNGoJHqK_lxVZGEaMG7YgSf4e8bRm_YzkznEAsbsk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9ydHJhaXRwcm9m/ZXNzaW9ubmVsLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAyL3Bob3RvX3No/b290aW5nX3Byb2Zl/c3Npb25uZWwuanBn',
    'https://imgs.search.brave.com/PyeyKQPYFgg3Ugx3fCtJjjaiZyjNU5_pV6C1OrrbKWs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by91dG9waXgtbmV4/dC13ZWJzaXRlL056/WXpNR1ExTjJRdE5E/WXpNeTAwWmpCbUxU/bGpOelF0WWpsak5H/VXpORFZsTXpVd184/YjI2Njg1Yi01MTM5/LTQzNmQtODhkZC1h/ODRlZDRmYTI5ZmJf/cHJvZmlsaG9tbWUx/MC5qcGc_aXhsaWI9/anMtMy44LjAmdz0z/ODQwJmF1dG89Zm9y/bWF0JmZpdD1tYXg',
    'https://imgs.search.brave.com/_K_ACUzyeHQU2951hHhfHDXMgTzjYxbn4k6OZ3wGIHE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vbWFubmVxdWlu/LXZ1ZS1wcm9maWwt/Y2hldmV1eC1jb3Vy/dHMtcmFpZGVzXzI1/NjU4OC0xMTYxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn',
    'https://imgs.search.brave.com/VpS9IdAoPOBmTyGBbWtdBcvs-bjVUDzu7uUTtT5oQV8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9ydHJhaXRwcm9m/ZXNzaW9ubmVsLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA3L1BvcnRyYWl0/LXByb2Zlc3Npb25u/ZWwtcGhvdG8tMDUu/anBn',
    'https://imgs.search.brave.com/ZNgJXC3ys-NWg98eIuLKlUWcvbhQB_qzsX5F0wqOJPY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9ydHJhaXRwcm9m/ZXNzaW9ubmVsLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAyL3Bob3RvX3By/b2Zlc3Npb25uZWxs/ZV9wYXJpcy5qcGc',
    'https://imgs.search.brave.com/T_xUNXX5adQbgk72-5E_tj5HIB37xnkpFUnK4ATGs3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLWdyYXR1/aXRlL3Bob3RvLXBv/cnRyYWl0XzE0NDYy/Ny00NjU4MC5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw',
    'https://imgs.search.brave.com/d9UYDT2R8g2jLKQNc4OCOsKDfMh7cPuZJlja4eRBTg4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9ydHJhaXRwcm9m/ZXNzaW9ubmVsLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzA5L1Bob3RvLXBv/cnRyYWl0LXByb2Zl/c3Npb25uZWwtY29y/cG9yYXRlLmpwZw',
    'https://imgs.search.brave.com/lplpLMTA9T4oi0C-3Fhw3ehjBBbuC1smaqp9SQkNdmo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9ydHJhaXRwcm9m/ZXNzaW9ubmVsLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAyL1Bob3RvZ3Jh/cGhlX3Byb2Zlc2lv/bm5lbF9wb3J0cmFp/dF9zdHVkaW8tMi5q/cGc',
  ];

  return (
    <div className="text-vintedTextGrisClair">
      <div className="flex w-full justify-between">
        <h1 className="h1">{title}</h1>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {products.map((product: Product, index) => (
          <div
            key={product.id}
            className="flex w-[200px] flex-col items-center space-y-5"
          >
            {users?.[product.id]?.name?.firstname && (
              <div className="flex w-full items-center gap-x-2.5">
                <img
                  src={imageProfile[index]}
                  alt={users[index].name.firstname}
                  className="h-8 w-8 rounded-full"
                />
                <p className="text-vintedTextGrisFonce">
                  {users[index].name.firstname}
                </p>
              </div>
            )}

            <img
              src={product.image}
              alt={product.title}
              className="h-[200px] w-[200px]"
            />
            <div className="flex w-10/12 place-content-between">
              <p className="text-black">{product.price} €</p>
              <img
                src="https://imgs.search.brave.com/gG2KjQOV_-SlWX3JMVWs6JbLuZ1rmki-fNiJbhzxDYE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzQ5/NC9QTkcvNTEyL2hl/YXJ0X2ljb24taWNv/bnMuY29tXzQ4Mjkw/LnBuZw"
                alt="coeur"
                className="w-6"
              />
            </div>
            <h2 className="text-center">{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
