import Link from "next/link";
import Image from "next/image";
import Container from "@/src/components/elements/container/page";
import { FcGraduationCap } from "react-icons/fc";

interface Team {
  id: number;
  slug: string;
  image: string;
  title: string;
}

export default function AuthorTeam() {
  return (
    <>
      <Container>
        <div className="team">
          {TeamData.map((data: Team) => (
            <>
              <div className="card" key={data.id}>
                <div className="img">
                  <Link href={`/author/${data.slug}`}>
                    <Image
                      src={data.image}
                      alt={data.title}
                      title={data.title}
                      height={500}
                      width={500}
                    />
                  </Link>
                  <span>
                    <FcGraduationCap />
                  </span>
                </div>
                <div className="caption">
                  <h3>{data.title}</h3>
                </div>
              </div>
            </>
          ))}
        </div>
      </Container>
    </>
  );
}

export const TeamData: Team[] = [
  {
    id: 1,
    title: "Muzammil Safdar",
    image: "https://picsum.photos/id/1015/200/300",
    slug: "muzammil",
  },
  {
    id: 2,
    title: "Imran Safdar",
    image: "https://picsum.photos/id/1015/200/300",
    slug: "/",
  },
  {
    id: 3,
    title: "Rashid Ali",
    image: "https://picsum.photos/id/1015/200/300",
    slug: "/",
  },
];
