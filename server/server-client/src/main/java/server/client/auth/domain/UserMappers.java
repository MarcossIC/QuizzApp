package server.client.auth.domain;

import server.client.global.domain.Mapper;

public final class UserMappers {
    public static final Mapper<UserModel, User> modelToEntity = (source)->
            new User(source.ID(), source.name(), source.lastname(), source.email(), source.password());
}
