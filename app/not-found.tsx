import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GoBackButton } from "@/components/ui/GoBackButton";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-muted/50 px-4 dark:bg-primary/20">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-accent">
            <span className="text-4xl font-bold text-white">MG</span>
          </div>
        </div>
        <h1 className="mb-2 text-8xl font-bold text-primary dark:text-white">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-primary dark:text-white">Page Not Found</h2>
        <p className="mx-auto mb-8 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="accent" icon={Home}>
            Go Home
          </Button>
          <GoBackButton />
        </div>
      </div>
    </section>
  );
}
