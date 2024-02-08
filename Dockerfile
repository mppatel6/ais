# Use the official .NET SDK image to build the project
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app
 
# Copy csproj and restore any dependencies (via nuget)
COPY ["api/api.csproj", "api/"]
RUN dotnet restore "api/api.csproj"
 
# Copy the project files and build the release
COPY api/. api/
RUN dotnet publish "api/api.csproj" -c Release -o out
 
# Use the official .NET runtime image to run the API
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
EXPOSE 8080
 
# Copy the build output from the SDK image
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "api.dll"]