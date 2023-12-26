package server.client.global.domain;

@FunctionalInterface
public interface Mapper<S, R> {
    R map(S source);
}
