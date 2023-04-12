FROM golang AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -a -installsuffix cgo

FROM alpine
WORKDIR /app
COPY --from=builder /app/app-go ./
EXPOSE 8080
CMD ./app-go