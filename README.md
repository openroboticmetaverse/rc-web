# Robotics Collective Website

The new Robotics Collective website repository.

## Prerequisites

Ensure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)

## Getting Started

### Clone the Repository

```sh
git clone git@github.com:openroboticmetaverse/rc-web.git
cd rc-web
```

### Start the Services

Run the following command to start the necessary service in the background:

```sh
docker compose up -d
```

### Access the Container

To enter the running container:

```sh
docker exec -it rc_website_v2 bash
```

### Start the Development Server

Once inside the container, run:

```sh
yarn dev
```

This will start the development server, and the website should be accessible at `http://localhost:3000`.


---

For any questions or issues, please create an issue in the repository or contact the maintainers.