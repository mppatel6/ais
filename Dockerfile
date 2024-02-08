# Use the official .NET Core runtime image as a base
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

# Build stage
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["ais/api/api.csproj", "ais/api/"]
RUN dotnet restore "ais/api/api.csproj"
COPY . .
WORKDIR "/src/ais/api"
RUN dotnet build "api.csproj" -c Release -o /app/build

# Publish stage
FROM build AS publish
RUN dotnet publish "api.csproj" -c Release -o /app/publish

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "api.dll"]
